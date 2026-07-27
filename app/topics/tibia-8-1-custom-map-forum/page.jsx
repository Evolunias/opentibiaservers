import Tibia81CustomMapForumKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapForumKeywordPage />;
}
