import SeasonalForumLatinAmericaKeywordPage, { generateMetadata } from './seasonal-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumLatinAmericaKeywordPage />;
}
