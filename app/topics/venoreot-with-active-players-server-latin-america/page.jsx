import VenoreotWithActivePlayersServerLatinAmericaKeywordPage, { generateMetadata } from './venoreot-with-active-players-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithActivePlayersServerLatinAmericaKeywordPage />;
}
