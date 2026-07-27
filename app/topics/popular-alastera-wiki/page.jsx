import PopularAlasteraWikiKeywordPage, { generateMetadata } from './popular-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraWikiKeywordPage />;
}
