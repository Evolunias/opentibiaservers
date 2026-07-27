import TopBaiakIlusionForumKeywordPage, { generateMetadata } from './top-baiak-ilusion-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBaiakIlusionForumKeywordPage />;
}
