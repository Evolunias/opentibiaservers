import NewSeasonTibiameForumKeywordPage, { generateMetadata } from './new-season-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameForumKeywordPage />;
}
