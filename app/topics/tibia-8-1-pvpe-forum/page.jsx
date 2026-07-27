import Tibia81PvpeForumKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeForumKeywordPage />;
}
