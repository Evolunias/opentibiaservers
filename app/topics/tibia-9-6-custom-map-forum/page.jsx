import Tibia96CustomMapForumKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapForumKeywordPage />;
}
