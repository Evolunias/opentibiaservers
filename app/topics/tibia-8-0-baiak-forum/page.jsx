import Tibia80BaiakForumKeywordPage, { generateMetadata } from './tibia-8-0-baiak-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakForumKeywordPage />;
}
