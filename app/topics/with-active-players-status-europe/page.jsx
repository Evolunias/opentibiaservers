import WithActivePlayersStatusEuropeKeywordPage, { generateMetadata } from './with-active-players-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusEuropeKeywordPage />;
}
