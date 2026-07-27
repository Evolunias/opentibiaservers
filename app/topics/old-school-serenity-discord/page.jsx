import OldSchoolSerenityDiscordKeywordPage, { generateMetadata } from './old-school-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityDiscordKeywordPage />;
}
