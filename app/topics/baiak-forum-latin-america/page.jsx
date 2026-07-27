import BaiakForumLatinAmericaKeywordPage, { generateMetadata } from './baiak-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumLatinAmericaKeywordPage />;
}
