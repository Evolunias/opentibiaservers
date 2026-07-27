import BestArchlightForumKeywordPage, { generateMetadata } from './best-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightForumKeywordPage />;
}
