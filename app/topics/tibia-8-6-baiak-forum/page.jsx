import Tibia86BaiakForumKeywordPage, { generateMetadata } from './tibia-8-6-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86BaiakForumKeywordPage />;
}
