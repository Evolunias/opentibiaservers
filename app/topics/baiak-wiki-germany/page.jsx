import BaiakWikiGermanyKeywordPage, { generateMetadata } from './baiak-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiGermanyKeywordPage />;
}
