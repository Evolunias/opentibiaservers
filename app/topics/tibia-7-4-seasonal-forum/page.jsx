import Tibia74SeasonalForumKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalForumKeywordPage />;
}
