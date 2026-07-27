import OldSchoolThorniaDiscordKeywordPage, { generateMetadata } from './old-school-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaDiscordKeywordPage />;
}
