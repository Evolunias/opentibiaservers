import TopVenoreotOtsKeywordPage, { generateMetadata } from './top-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotOtsKeywordPage />;
}
