import Tibia11NonPvpForumKeywordPage, { generateMetadata } from './tibia-11-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpForumKeywordPage />;
}
