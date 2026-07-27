import Tibia15PvpeForumKeywordPage, { generateMetadata } from './tibia-15-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeForumKeywordPage />;
}
