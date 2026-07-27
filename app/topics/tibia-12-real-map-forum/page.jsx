import Tibia12RealMapForumKeywordPage, { generateMetadata } from './tibia-12-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapForumKeywordPage />;
}
