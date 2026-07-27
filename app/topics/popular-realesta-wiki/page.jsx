import PopularRealestaWikiKeywordPage, { generateMetadata } from './popular-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaWikiKeywordPage />;
}
