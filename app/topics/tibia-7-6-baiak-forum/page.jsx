import Tibia76BaiakForumKeywordPage, { generateMetadata } from './tibia-7-6-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76BaiakForumKeywordPage />;
}
