import Tibia13PvpeForumKeywordPage, { generateMetadata } from './tibia-13-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeForumKeywordPage />;
}
