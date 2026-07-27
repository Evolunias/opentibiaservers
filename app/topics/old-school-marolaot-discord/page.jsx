import OldSchoolMarolaotDiscordKeywordPage, { generateMetadata } from './old-school-marolaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotDiscordKeywordPage />;
}
