import Tibia11PvpeForumKeywordPage, { generateMetadata } from './tibia-11-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeForumKeywordPage />;
}
