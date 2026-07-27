import LowrateVenoreotOtsKeywordPage, { generateMetadata } from './lowrate-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotOtsKeywordPage />;
}
