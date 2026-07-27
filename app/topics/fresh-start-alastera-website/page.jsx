import FreshStartAlasteraWebsiteKeywordPage, { generateMetadata } from './fresh-start-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraWebsiteKeywordPage />;
}
