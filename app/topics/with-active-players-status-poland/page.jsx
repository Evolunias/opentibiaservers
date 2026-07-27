import WithActivePlayersStatusPolandKeywordPage, { generateMetadata } from './with-active-players-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusPolandKeywordPage />;
}
