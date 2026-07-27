import Tibia1098SeasonalForumKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalForumKeywordPage />;
}
