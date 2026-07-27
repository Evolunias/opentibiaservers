import Tibia84SeasonalForumKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalForumKeywordPage />;
}
