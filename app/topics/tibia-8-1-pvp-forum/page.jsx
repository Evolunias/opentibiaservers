import Tibia81PvpForumKeywordPage, { generateMetadata } from './tibia-8-1-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpForumKeywordPage />;
}
