import OldSchoolDiscordMexicoKeywordPage, { generateMetadata } from './old-school-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordMexicoKeywordPage />;
}
