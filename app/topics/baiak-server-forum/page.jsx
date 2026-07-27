import BaiakServerForumKeywordPage, { generateMetadata } from './baiak-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerForumKeywordPage />;
}
