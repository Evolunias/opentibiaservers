import NewSeasonAlasteraWikiKeywordPage, { generateMetadata } from './new-season-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraWikiKeywordPage />;
}
