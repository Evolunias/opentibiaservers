import Tibia80NonPvpForumKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpForumKeywordPage />;
}
