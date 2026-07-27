import LowrateVenoreotGuideKeywordPage, { generateMetadata } from './lowrate-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotGuideKeywordPage />;
}
