import FreshStartSeasonGermanyKeywordPage, { generateMetadata } from './fresh-start-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonGermanyKeywordPage />;
}
