import OtmadnessSeasonalServerGermanyKeywordPage, { generateMetadata } from './otmadness-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessSeasonalServerGermanyKeywordPage />;
}
