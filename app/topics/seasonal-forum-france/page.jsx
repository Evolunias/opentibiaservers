import SeasonalForumFranceKeywordPage, { generateMetadata } from './seasonal-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalForumFranceKeywordPage />;
}
