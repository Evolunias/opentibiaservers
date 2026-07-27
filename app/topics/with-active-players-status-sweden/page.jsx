import WithActivePlayersStatusSwedenKeywordPage, { generateMetadata } from './with-active-players-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusSwedenKeywordPage />;
}
