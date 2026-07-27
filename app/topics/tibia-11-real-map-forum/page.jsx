import Tibia11RealMapForumKeywordPage, { generateMetadata } from './tibia-11-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapForumKeywordPage />;
}
