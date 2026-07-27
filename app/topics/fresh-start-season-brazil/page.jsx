import FreshStartSeasonBrazilKeywordPage, { generateMetadata } from './fresh-start-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonBrazilKeywordPage />;
}
