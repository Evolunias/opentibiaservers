import VenoreotEvoServerEuropeKeywordPage, { generateMetadata } from './venoreot-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotEvoServerEuropeKeywordPage />;
}
