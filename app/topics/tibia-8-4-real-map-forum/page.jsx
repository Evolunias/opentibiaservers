import Tibia84RealMapForumKeywordPage, { generateMetadata } from './tibia-8-4-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RealMapForumKeywordPage />;
}
