import BestVenoreotWebsiteKeywordPage, { generateMetadata } from './best-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotWebsiteKeywordPage />;
}
