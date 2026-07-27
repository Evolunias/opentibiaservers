import BaiakForumArgentinaKeywordPage, { generateMetadata } from './baiak-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumArgentinaKeywordPage />;
}
