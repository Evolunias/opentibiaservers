import Tibia1098ServerForumKeywordPage, { generateMetadata } from './tibia-10-98-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerForumKeywordPage />;
}
