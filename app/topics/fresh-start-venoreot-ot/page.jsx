import FreshStartVenoreotOtKeywordPage, { generateMetadata } from './fresh-start-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotOtKeywordPage />;
}
