import Tibia86NonPvpForumKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpForumKeywordPage />;
}
