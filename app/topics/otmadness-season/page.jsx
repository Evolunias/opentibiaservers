import OtmadnessSeasonKeywordPage, { generateMetadata } from './otmadness-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessSeasonKeywordPage />;
}
