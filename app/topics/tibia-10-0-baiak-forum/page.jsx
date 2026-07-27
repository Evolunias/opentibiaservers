import Tibia100BaiakForumKeywordPage, { generateMetadata } from './tibia-10-0-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakForumKeywordPage />;
}
