import WithActivePlayersStatusLatinAmericaKeywordPage, { generateMetadata } from './with-active-players-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusLatinAmericaKeywordPage />;
}
