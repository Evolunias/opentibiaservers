import BestVenoreotOtsKeywordPage, { generateMetadata } from './best-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotOtsKeywordPage />;
}
