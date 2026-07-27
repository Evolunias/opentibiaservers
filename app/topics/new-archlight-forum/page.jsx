import NewArchlightForumKeywordPage, { generateMetadata } from './new-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightForumKeywordPage />;
}
