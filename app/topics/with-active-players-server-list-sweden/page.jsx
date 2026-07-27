import WithActivePlayersServerListSwedenKeywordPage, { generateMetadata } from './with-active-players-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListSwedenKeywordPage />;
}
