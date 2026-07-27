import FreshStartVenoreotOtsKeywordPage, { generateMetadata } from './fresh-start-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotOtsKeywordPage />;
}
