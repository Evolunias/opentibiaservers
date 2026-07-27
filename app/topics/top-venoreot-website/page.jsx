import TopVenoreotWebsiteKeywordPage, { generateMetadata } from './top-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotWebsiteKeywordPage />;
}
