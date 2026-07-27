import Tibia14CustomMapForumKeywordPage, { generateMetadata } from './tibia-14-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapForumKeywordPage />;
}
