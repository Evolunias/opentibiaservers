import VenoreotWithActivePlayersServerEuropeKeywordPage, { generateMetadata } from './venoreot-with-active-players-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithActivePlayersServerEuropeKeywordPage />;
}
