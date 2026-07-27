import NewSeasonOtmadnessServerKeywordPage, { generateMetadata } from './new-season-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessServerKeywordPage />;
}
