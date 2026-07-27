import SeasonalForumPolandKeywordPage, { generateMetadata } from './seasonal-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumPolandKeywordPage />;
}
