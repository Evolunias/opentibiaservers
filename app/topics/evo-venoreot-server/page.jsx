import EvoVenoreotServerKeywordPage, { generateMetadata } from './evo-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoVenoreotServerKeywordPage />;
}
