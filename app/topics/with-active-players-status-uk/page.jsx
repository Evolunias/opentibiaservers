import WithActivePlayersStatusUkKeywordPage, { generateMetadata } from './with-active-players-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusUkKeywordPage />;
}
