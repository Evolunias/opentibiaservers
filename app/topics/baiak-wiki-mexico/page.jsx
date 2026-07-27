import BaiakWikiMexicoKeywordPage, { generateMetadata } from './baiak-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiMexicoKeywordPage />;
}
