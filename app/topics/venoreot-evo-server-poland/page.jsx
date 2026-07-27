import VenoreotEvoServerPolandKeywordPage, { generateMetadata } from './venoreot-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotEvoServerPolandKeywordPage />;
}
