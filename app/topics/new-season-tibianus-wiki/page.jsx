import NewSeasonTibianusWikiKeywordPage, { generateMetadata } from './new-season-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusWikiKeywordPage />;
}
