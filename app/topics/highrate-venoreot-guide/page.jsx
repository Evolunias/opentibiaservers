import HighrateVenoreotGuideKeywordPage, { generateMetadata } from './highrate-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotGuideKeywordPage />;
}
