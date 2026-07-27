import Tibia14BaiakForumKeywordPage, { generateMetadata } from './tibia-14-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakForumKeywordPage />;
}
