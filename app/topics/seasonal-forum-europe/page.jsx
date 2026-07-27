import SeasonalForumEuropeKeywordPage, { generateMetadata } from './seasonal-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumEuropeKeywordPage />;
}
