import Tibia76PvpeForumKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeForumKeywordPage />;
}
