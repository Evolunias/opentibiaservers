import BaiakForumMexicoKeywordPage, { generateMetadata } from './baiak-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumMexicoKeywordPage />;
}
