import Tibia84BaiakForumKeywordPage, { generateMetadata } from './tibia-8-4-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84BaiakForumKeywordPage />;
}
