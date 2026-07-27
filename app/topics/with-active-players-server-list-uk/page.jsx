import WithActivePlayersServerListUkKeywordPage, { generateMetadata } from './with-active-players-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListUkKeywordPage />;
}
