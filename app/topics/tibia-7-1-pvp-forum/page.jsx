import Tibia71PvpForumKeywordPage, { generateMetadata } from './tibia-7-1-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpForumKeywordPage />;
}
