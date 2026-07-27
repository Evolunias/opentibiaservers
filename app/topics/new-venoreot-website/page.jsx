import NewVenoreotWebsiteKeywordPage, { generateMetadata } from './new-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotWebsiteKeywordPage />;
}
