import Tibia13ServerForumKeywordPage, { generateMetadata } from './tibia-13-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerForumKeywordPage />;
}
