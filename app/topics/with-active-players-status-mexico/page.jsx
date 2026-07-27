import WithActivePlayersStatusMexicoKeywordPage, { generateMetadata } from './with-active-players-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusMexicoKeywordPage />;
}
