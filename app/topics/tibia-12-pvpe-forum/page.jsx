import Tibia12PvpeForumKeywordPage, { generateMetadata } from './tibia-12-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeForumKeywordPage />;
}
