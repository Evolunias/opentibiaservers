import Tibia11CustomMapForumKeywordPage, { generateMetadata } from './tibia-11-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapForumKeywordPage />;
}
