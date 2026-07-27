import Tibia1098NonPvpForumKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpForumKeywordPage />;
}
