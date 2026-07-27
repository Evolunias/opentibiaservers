import Tibia81BaiakForumKeywordPage, { generateMetadata } from './tibia-8-1-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakForumKeywordPage />;
}
