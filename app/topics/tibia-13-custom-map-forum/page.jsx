import Tibia13CustomMapForumKeywordPage, { generateMetadata } from './tibia-13-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapForumKeywordPage />;
}
