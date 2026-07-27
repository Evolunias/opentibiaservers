import WithActivePlayersServerListArgentinaKeywordPage, { generateMetadata } from './with-active-players-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListArgentinaKeywordPage />;
}
