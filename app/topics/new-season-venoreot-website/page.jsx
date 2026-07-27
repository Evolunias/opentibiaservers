import NewSeasonVenoreotWebsiteKeywordPage, { generateMetadata } from './new-season-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotWebsiteKeywordPage />;
}
