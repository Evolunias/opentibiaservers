import NewSeasonArchlightWikiKeywordPage, { generateMetadata } from './new-season-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightWikiKeywordPage />;
}
