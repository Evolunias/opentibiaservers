import NewSeasonArchlightForumKeywordPage, { generateMetadata } from './new-season-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightForumKeywordPage />;
}
