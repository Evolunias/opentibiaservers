import Tibia84CustomMapForumKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapForumKeywordPage />;
}
