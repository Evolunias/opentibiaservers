import SeasonalForumSwedenKeywordPage, { generateMetadata } from './seasonal-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumSwedenKeywordPage />;
}
