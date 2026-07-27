import NewSeasonDuraOnlineWikiKeywordPage, { generateMetadata } from './new-season-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineWikiKeywordPage />;
}
