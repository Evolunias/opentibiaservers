import WithActivePlayersServerListMexicoKeywordPage, { generateMetadata } from './with-active-players-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListMexicoKeywordPage />;
}
