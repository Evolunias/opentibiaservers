import Tibia71RealMapForumKeywordPage, { generateMetadata } from './tibia-7-1-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapForumKeywordPage />;
}
