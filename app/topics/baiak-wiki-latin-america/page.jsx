import BaiakWikiLatinAmericaKeywordPage, { generateMetadata } from './baiak-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiLatinAmericaKeywordPage />;
}
