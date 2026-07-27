import Tibia84PvpeForumKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeForumKeywordPage />;
}
