import Tibia86RealMapForumKeywordPage, { generateMetadata } from './tibia-8-6-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapForumKeywordPage />;
}
