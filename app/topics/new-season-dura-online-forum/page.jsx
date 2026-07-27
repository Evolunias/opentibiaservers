import NewSeasonDuraOnlineForumKeywordPage, { generateMetadata } from './new-season-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineForumKeywordPage />;
}
