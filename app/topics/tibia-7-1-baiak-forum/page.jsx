import Tibia71BaiakForumKeywordPage, { generateMetadata } from './tibia-7-1-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakForumKeywordPage />;
}
