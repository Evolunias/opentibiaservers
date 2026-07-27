import BaiakWikiSwedenKeywordPage, { generateMetadata } from './baiak-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiSwedenKeywordPage />;
}
