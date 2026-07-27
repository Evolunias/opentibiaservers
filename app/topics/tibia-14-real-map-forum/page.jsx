import Tibia14RealMapForumKeywordPage, { generateMetadata } from './tibia-14-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapForumKeywordPage />;
}
