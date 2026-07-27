import Tibia74NonPvpForumKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpForumKeywordPage />;
}
