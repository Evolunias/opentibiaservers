import Tibia13RealMapForumKeywordPage, { generateMetadata } from './tibia-13-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapForumKeywordPage />;
}
