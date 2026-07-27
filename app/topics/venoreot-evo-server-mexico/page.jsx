import VenoreotEvoServerMexicoKeywordPage, { generateMetadata } from './venoreot-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotEvoServerMexicoKeywordPage />;
}
