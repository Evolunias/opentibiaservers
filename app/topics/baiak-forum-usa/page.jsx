import BaiakForumUsaKeywordPage, { generateMetadata } from './baiak-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumUsaKeywordPage />;
}
