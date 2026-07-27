import Tibia12NonPvpForumKeywordPage, { generateMetadata } from './tibia-12-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpForumKeywordPage />;
}
