import Tibia84PvpForumKeywordPage, { generateMetadata } from './tibia-8-4-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpForumKeywordPage />;
}
