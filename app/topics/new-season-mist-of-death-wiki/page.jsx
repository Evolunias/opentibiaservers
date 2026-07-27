import NewSeasonMistOfDeathWikiKeywordPage, { generateMetadata } from './new-season-mist-of-death-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMistOfDeathWikiKeywordPage />;
}
