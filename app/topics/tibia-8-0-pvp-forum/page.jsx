import Tibia80PvpForumKeywordPage, { generateMetadata } from './tibia-8-0-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpForumKeywordPage />;
}
