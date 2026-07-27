import NewMarolaotDiscordKeywordPage, { generateMetadata } from './new-marolaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotDiscordKeywordPage />;
}
