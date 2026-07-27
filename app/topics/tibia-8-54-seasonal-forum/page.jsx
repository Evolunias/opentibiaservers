import Tibia854SeasonalForumKeywordPage, { generateMetadata } from './tibia-8-54-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854SeasonalForumKeywordPage />;
}
