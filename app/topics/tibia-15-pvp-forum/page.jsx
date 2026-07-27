import Tibia15PvpForumKeywordPage, { generateMetadata } from './tibia-15-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpForumKeywordPage />;
}
