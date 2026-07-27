import PopularVenoreotOtsKeywordPage, { generateMetadata } from './popular-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotOtsKeywordPage />;
}
