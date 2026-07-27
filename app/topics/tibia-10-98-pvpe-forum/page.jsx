import Tibia1098PvpeForumKeywordPage, { generateMetadata } from './tibia-10-98-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpeForumKeywordPage />;
}
