import Tibia81RealMapForumKeywordPage, { generateMetadata } from './tibia-8-1-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RealMapForumKeywordPage />;
}
