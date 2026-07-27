import BaiakForumNorthAmericaKeywordPage, { generateMetadata } from './baiak-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumNorthAmericaKeywordPage />;
}
