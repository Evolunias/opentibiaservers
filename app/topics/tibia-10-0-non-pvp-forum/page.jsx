import Tibia100NonPvpForumKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpForumKeywordPage />;
}
