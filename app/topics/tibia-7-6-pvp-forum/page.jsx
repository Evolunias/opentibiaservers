import Tibia76PvpForumKeywordPage, { generateMetadata } from './tibia-7-6-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpForumKeywordPage />;
}
