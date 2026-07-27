import FreshStartArchlightForumKeywordPage, { generateMetadata } from './fresh-start-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightForumKeywordPage />;
}
