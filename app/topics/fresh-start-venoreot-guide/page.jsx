import FreshStartVenoreotGuideKeywordPage, { generateMetadata } from './fresh-start-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotGuideKeywordPage />;
}
