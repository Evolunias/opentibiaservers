import PopularNepreniaWikiKeywordPage, { generateMetadata } from './popular-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaWikiKeywordPage />;
}
