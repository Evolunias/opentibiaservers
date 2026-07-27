import BaiakForumBrazilKeywordPage, { generateMetadata } from './baiak-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumBrazilKeywordPage />;
}
