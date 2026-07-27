import VenoreotWithActivePlayersServerUkKeywordPage, { generateMetadata } from './venoreot-with-active-players-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithActivePlayersServerUkKeywordPage />;
}
