import Tibia772SeasonalForumKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalForumKeywordPage />;
}
