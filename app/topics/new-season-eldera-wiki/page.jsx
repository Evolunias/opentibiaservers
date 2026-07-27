import NewSeasonElderaWikiKeywordPage, { generateMetadata } from './new-season-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaWikiKeywordPage />;
}
