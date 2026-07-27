import Tibia96SeasonalForumKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalForumKeywordPage />;
}
