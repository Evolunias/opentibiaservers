import Tibia100RealMapForumKeywordPage, { generateMetadata } from './tibia-10-0-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapForumKeywordPage />;
}
