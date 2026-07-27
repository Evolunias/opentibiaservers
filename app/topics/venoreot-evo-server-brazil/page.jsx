import VenoreotEvoServerBrazilKeywordPage, { generateMetadata } from './venoreot-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotEvoServerBrazilKeywordPage />;
}
