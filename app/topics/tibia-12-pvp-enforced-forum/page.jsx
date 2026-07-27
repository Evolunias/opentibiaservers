import Tibia12PvpEnforcedForumKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedForumKeywordPage />;
}
