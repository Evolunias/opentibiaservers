import SeasonalOtmadnessServerKeywordPage, { generateMetadata } from './seasonal-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOtmadnessServerKeywordPage />;
}
