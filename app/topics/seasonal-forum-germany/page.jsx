import SeasonalForumGermanyKeywordPage, { generateMetadata } from './seasonal-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumGermanyKeywordPage />;
}
