import LowrateVenoreotOtKeywordPage, { generateMetadata } from './lowrate-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotOtKeywordPage />;
}
