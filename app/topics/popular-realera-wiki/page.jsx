import PopularRealeraWikiKeywordPage, { generateMetadata } from './popular-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraWikiKeywordPage />;
}
