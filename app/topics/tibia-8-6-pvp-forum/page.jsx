import Tibia86PvpForumKeywordPage, { generateMetadata } from './tibia-8-6-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpForumKeywordPage />;
}
