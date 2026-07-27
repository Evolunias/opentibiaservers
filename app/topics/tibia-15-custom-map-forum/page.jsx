import Tibia15CustomMapForumKeywordPage, { generateMetadata } from './tibia-15-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapForumKeywordPage />;
}
