import Tibia96BaiakForumKeywordPage, { generateMetadata } from './tibia-9-6-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakForumKeywordPage />;
}
