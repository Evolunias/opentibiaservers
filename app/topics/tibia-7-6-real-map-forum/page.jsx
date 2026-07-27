import Tibia76RealMapForumKeywordPage, { generateMetadata } from './tibia-7-6-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapForumKeywordPage />;
}
