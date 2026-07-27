import NewSeasonTibiameWikiKeywordPage, { generateMetadata } from './new-season-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameWikiKeywordPage />;
}
