import WithActivePlayersServerListGermanyKeywordPage, { generateMetadata } from './with-active-players-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListGermanyKeywordPage />;
}
