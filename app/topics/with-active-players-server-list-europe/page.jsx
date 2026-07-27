import WithActivePlayersServerListEuropeKeywordPage, { generateMetadata } from './with-active-players-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListEuropeKeywordPage />;
}
