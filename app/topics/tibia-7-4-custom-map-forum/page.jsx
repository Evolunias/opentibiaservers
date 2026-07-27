import Tibia74CustomMapForumKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapForumKeywordPage />;
}
