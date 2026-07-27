import Tibia100PvpForumKeywordPage, { generateMetadata } from './tibia-10-0-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpForumKeywordPage />;
}
