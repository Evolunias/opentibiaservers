import NewSeasonOxygenotGuideKeywordPage, { generateMetadata } from './new-season-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotGuideKeywordPage />;
}
