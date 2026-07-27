import OfficialMarolaotDiscordKeywordPage, { generateMetadata } from './official-marolaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotDiscordKeywordPage />;
}
