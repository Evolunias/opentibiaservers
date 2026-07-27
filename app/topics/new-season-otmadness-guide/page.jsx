import NewSeasonOtmadnessGuideKeywordPage, { generateMetadata } from './new-season-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessGuideKeywordPage />;
}
