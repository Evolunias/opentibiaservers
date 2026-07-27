import NewSeasonSaintsotWikiKeywordPage, { generateMetadata } from './new-season-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotWikiKeywordPage />;
}
