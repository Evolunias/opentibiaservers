import ActiveVenoreotWebsiteKeywordPage, { generateMetadata } from './active-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotWebsiteKeywordPage />;
}
