import VenoreotWebsiteKeywordPage, { generateMetadata } from './venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWebsiteKeywordPage />;
}
