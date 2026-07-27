import Tibia11SeasonalForumKeywordPage, { generateMetadata } from './tibia-11-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalForumKeywordPage />;
}
