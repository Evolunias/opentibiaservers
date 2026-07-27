import FreshStartVenoreotWebsiteKeywordPage, { generateMetadata } from './fresh-start-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotWebsiteKeywordPage />;
}
