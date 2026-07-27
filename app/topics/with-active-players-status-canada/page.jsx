import WithActivePlayersStatusCanadaKeywordPage, { generateMetadata } from './with-active-players-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusCanadaKeywordPage />;
}
