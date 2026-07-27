import EvoVenoreotServersKeywordPage, { generateMetadata } from './evo-venoreot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoVenoreotServersKeywordPage />;
}
