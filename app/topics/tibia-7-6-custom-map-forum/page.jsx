import Tibia76CustomMapForumKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapForumKeywordPage />;
}
