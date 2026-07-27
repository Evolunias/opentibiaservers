import SeasonalForumSouthAmericaKeywordPage, { generateMetadata } from './seasonal-forum-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumSouthAmericaKeywordPage />;
}
