import Tibia74PvpForumKeywordPage, { generateMetadata } from './tibia-7-4-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpForumKeywordPage />;
}
