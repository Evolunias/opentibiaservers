import Tibia1098PvpForumKeywordPage, { generateMetadata } from './tibia-10-98-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpForumKeywordPage />;
}
