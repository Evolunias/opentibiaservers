import Tibia80RealMapForumKeywordPage, { generateMetadata } from './tibia-8-0-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapForumKeywordPage />;
}
