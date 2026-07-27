import Tibia74RealMapForumKeywordPage, { generateMetadata } from './tibia-7-4-real-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapForumKeywordPage />;
}
