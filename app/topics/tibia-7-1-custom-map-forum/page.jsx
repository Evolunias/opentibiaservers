import Tibia71CustomMapForumKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapForumKeywordPage />;
}
