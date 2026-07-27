import PopularImperianicWikiKeywordPage, { generateMetadata } from './popular-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicWikiKeywordPage />;
}
