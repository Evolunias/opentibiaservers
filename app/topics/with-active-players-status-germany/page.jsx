import WithActivePlayersStatusGermanyKeywordPage, { generateMetadata } from './with-active-players-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusGermanyKeywordPage />;
}
