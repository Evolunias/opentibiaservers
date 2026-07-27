import Tibia14PvpForumKeywordPage, { generateMetadata } from './tibia-14-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpForumKeywordPage />;
}
