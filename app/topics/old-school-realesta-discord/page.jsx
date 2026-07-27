import OldSchoolRealestaDiscordKeywordPage, { generateMetadata } from './old-school-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaDiscordKeywordPage />;
}
