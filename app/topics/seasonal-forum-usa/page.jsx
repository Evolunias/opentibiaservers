import SeasonalForumUsaKeywordPage, { generateMetadata } from './seasonal-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumUsaKeywordPage />;
}
