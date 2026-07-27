import Tibia14PvpeForumKeywordPage, { generateMetadata } from './tibia-14-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeForumKeywordPage />;
}
