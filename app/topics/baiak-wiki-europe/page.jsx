import BaiakWikiEuropeKeywordPage, { generateMetadata } from './baiak-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiEuropeKeywordPage />;
}
