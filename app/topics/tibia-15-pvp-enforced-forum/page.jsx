import Tibia15PvpEnforcedForumKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedForumKeywordPage />;
}
