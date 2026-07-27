import Tibia1098CustomMapForumKeywordPage, { generateMetadata } from './tibia-10-98-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098CustomMapForumKeywordPage />;
}
