import Tibia80PvpEnforcedForumKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedForumKeywordPage />;
}
