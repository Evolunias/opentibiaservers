import NewSeasonUnlineGuideKeywordPage, { generateMetadata } from './new-season-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineGuideKeywordPage />;
}
