import Tibia76NonPvpForumKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpForumKeywordPage />;
}
