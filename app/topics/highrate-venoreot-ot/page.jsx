import HighrateVenoreotOtKeywordPage, { generateMetadata } from './highrate-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotOtKeywordPage />;
}
