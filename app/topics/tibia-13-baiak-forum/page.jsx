import Tibia13BaiakForumKeywordPage, { generateMetadata } from './tibia-13-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakForumKeywordPage />;
}
