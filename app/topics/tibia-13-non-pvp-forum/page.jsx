import Tibia13NonPvpForumKeywordPage, { generateMetadata } from './tibia-13-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpForumKeywordPage />;
}
