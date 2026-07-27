import BaiakForumEuropeKeywordPage, { generateMetadata } from './baiak-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumEuropeKeywordPage />;
}
