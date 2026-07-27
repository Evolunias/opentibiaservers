import NewSeasonTibiantisWikiKeywordPage, { generateMetadata } from './new-season-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisWikiKeywordPage />;
}
