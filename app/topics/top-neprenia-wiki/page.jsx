import TopNepreniaWikiKeywordPage, { generateMetadata } from './top-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaWikiKeywordPage />;
}
