import BaiakWikiSouthAmericaKeywordPage, { generateMetadata } from './baiak-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiSouthAmericaKeywordPage />;
}
