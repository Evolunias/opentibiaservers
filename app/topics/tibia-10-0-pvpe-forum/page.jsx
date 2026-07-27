import Tibia100PvpeForumKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeForumKeywordPage />;
}
