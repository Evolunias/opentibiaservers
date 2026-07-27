import Tibia96PvpForumKeywordPage, { generateMetadata } from './tibia-9-6-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpForumKeywordPage />;
}
