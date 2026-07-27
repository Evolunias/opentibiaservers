import SeasonalForumArgentinaKeywordPage, { generateMetadata } from './seasonal-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumArgentinaKeywordPage />;
}
