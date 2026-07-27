import Tibia80PvpeForumKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeForumKeywordPage />;
}
