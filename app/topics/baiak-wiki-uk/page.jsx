import BaiakWikiUkKeywordPage, { generateMetadata } from './baiak-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiUkKeywordPage />;
}
