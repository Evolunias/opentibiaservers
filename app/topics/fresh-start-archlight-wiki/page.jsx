import FreshStartArchlightWikiKeywordPage, { generateMetadata } from './fresh-start-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightWikiKeywordPage />;
}
