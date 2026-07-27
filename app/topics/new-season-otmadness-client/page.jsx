import NewSeasonOtmadnessClientKeywordPage, { generateMetadata } from './new-season-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessClientKeywordPage />;
}
