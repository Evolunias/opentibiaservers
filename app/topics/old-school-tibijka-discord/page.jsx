import OldSchoolTibijkaDiscordKeywordPage, { generateMetadata } from './old-school-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaDiscordKeywordPage />;
}
