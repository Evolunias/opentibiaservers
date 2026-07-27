import Tibia86SeasonalForumKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalForumKeywordPage />;
}
