import FreshStartArchlightWebsiteKeywordPage, { generateMetadata } from './fresh-start-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightWebsiteKeywordPage />;
}
