import TopArchlightForumKeywordPage, { generateMetadata } from './top-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightForumKeywordPage />;
}
