import Tibia81NonPvpForumKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpForumKeywordPage />;
}
