import Tibia772NonPvpForumKeywordPage, { generateMetadata } from './tibia-7-72-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NonPvpForumKeywordPage />;
}
