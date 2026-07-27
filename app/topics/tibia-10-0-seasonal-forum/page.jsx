import Tibia100SeasonalForumKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalForumKeywordPage />;
}
