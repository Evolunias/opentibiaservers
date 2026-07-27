import Tibia14SeasonalForumKeywordPage, { generateMetadata } from './tibia-14-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalForumKeywordPage />;
}
