import BaiakForumPolandKeywordPage, { generateMetadata } from './baiak-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumPolandKeywordPage />;
}
