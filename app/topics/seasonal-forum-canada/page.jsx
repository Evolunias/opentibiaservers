import SeasonalForumCanadaKeywordPage, { generateMetadata } from './seasonal-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumCanadaKeywordPage />;
}
