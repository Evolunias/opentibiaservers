import Tibia14PvpEnforcedForumKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedForumKeywordPage />;
}
