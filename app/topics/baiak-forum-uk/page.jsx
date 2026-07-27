import BaiakForumUkKeywordPage, { generateMetadata } from './baiak-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumUkKeywordPage />;
}
