import OldSchoolKasteriaDiscordKeywordPage, { generateMetadata } from './old-school-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaDiscordKeywordPage />;
}
