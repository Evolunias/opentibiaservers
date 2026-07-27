import NewSeasonOtmadnessOtsKeywordPage, { generateMetadata } from './new-season-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessOtsKeywordPage />;
}
