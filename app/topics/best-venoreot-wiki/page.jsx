import BestVenoreotWikiKeywordPage, { generateMetadata } from './best-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotWikiKeywordPage />;
}
