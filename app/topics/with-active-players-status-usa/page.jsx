import WithActivePlayersStatusUsaKeywordPage, { generateMetadata } from './with-active-players-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusUsaKeywordPage />;
}
