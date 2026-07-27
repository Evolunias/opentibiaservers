import Tibia84NonPvpForumKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpForumKeywordPage />;
}
