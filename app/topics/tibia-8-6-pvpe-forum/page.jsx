import Tibia86PvpeForumKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeForumKeywordPage />;
}
