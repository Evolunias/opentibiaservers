import FreshStartSeasonSwedenKeywordPage, { generateMetadata } from './fresh-start-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonSwedenKeywordPage />;
}
