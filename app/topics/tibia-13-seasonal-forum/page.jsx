import Tibia13SeasonalForumKeywordPage, { generateMetadata } from './tibia-13-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalForumKeywordPage />;
}
