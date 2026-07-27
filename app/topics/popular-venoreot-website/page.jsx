import PopularVenoreotWebsiteKeywordPage, { generateMetadata } from './popular-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotWebsiteKeywordPage />;
}
