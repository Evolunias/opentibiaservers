import Tibia12PvpForumKeywordPage, { generateMetadata } from './tibia-12-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpForumKeywordPage />;
}
