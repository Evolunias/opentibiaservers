import Tibia86CustomMapForumKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapForumKeywordPage />;
}
