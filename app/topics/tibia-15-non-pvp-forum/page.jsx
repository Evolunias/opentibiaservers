import Tibia15NonPvpForumKeywordPage, { generateMetadata } from './tibia-15-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpForumKeywordPage />;
}
