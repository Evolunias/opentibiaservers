import NewSeasonCarlinotGuideKeywordPage, { generateMetadata } from './new-season-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotGuideKeywordPage />;
}
