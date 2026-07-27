import NewSeasonOtmadnessKeywordPage, { generateMetadata } from './new-season-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessKeywordPage />;
}
