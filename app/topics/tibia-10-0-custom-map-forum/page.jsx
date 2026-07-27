import Tibia100CustomMapForumKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapForumKeywordPage />;
}
