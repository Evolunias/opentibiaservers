import OtmadnessSeasonalServerUkKeywordPage, { generateMetadata } from './otmadness-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessSeasonalServerUkKeywordPage />;
}
