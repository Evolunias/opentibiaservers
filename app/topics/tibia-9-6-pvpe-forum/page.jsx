import Tibia96PvpeForumKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeForumKeywordPage />;
}
