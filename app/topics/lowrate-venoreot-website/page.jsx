import LowrateVenoreotWebsiteKeywordPage, { generateMetadata } from './lowrate-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotWebsiteKeywordPage />;
}
