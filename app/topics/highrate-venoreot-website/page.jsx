import HighrateVenoreotWebsiteKeywordPage, { generateMetadata } from './highrate-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotWebsiteKeywordPage />;
}
