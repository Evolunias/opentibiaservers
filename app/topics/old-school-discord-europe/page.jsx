import OldSchoolDiscordEuropeKeywordPage, { generateMetadata } from './old-school-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordEuropeKeywordPage />;
}
