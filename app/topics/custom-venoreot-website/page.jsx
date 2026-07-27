import CustomVenoreotWebsiteKeywordPage, { generateMetadata } from './custom-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotWebsiteKeywordPage />;
}
