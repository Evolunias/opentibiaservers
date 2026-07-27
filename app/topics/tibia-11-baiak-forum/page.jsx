import Tibia11BaiakForumKeywordPage, { generateMetadata } from './tibia-11-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakForumKeywordPage />;
}
