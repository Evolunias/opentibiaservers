import FreshStartArchlightLoginKeywordPage, { generateMetadata } from './fresh-start-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightLoginKeywordPage />;
}
