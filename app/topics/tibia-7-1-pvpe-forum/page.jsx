import Tibia71PvpeForumKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeForumKeywordPage />;
}
