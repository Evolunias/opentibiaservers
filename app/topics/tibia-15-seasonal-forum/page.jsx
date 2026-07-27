import Tibia15SeasonalForumKeywordPage, { generateMetadata } from './tibia-15-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalForumKeywordPage />;
}
