import NewSeasonUnlineWikiKeywordPage, { generateMetadata } from './new-season-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineWikiKeywordPage />;
}
