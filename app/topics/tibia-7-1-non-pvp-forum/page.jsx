import Tibia71NonPvpForumKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpForumKeywordPage />;
}
