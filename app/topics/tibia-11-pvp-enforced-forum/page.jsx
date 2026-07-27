import Tibia11PvpEnforcedForumKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedForumKeywordPage />;
}
