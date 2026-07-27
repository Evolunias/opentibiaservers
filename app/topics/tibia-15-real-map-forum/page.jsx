import Tibia15RealMapForumKeywordPage, { generateMetadata } from './tibia-15-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapForumKeywordPage />;
}
