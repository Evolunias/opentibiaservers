import HighrateVenoreotOtsKeywordPage, { generateMetadata } from './highrate-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotOtsKeywordPage />;
}
