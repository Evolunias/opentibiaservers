import NewSeasonOtmadnessOtServerKeywordPage, { generateMetadata } from './new-season-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessOtServerKeywordPage />;
}
