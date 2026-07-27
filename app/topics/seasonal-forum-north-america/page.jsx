import SeasonalForumNorthAmericaKeywordPage, { generateMetadata } from './seasonal-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumNorthAmericaKeywordPage />;
}
