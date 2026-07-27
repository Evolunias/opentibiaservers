import Tibia76SeasonalForumKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalForumKeywordPage />;
}
