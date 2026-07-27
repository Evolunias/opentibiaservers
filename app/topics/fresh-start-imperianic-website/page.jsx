import FreshStartImperianicWebsiteKeywordPage, { generateMetadata } from './fresh-start-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicWebsiteKeywordPage />;
}
