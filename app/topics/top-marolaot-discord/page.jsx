import TopMarolaotDiscordKeywordPage, { generateMetadata } from './top-marolaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotDiscordKeywordPage />;
}
