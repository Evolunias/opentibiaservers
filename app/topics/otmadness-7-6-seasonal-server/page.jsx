import Otmadness76SeasonalServerKeywordPage, { generateMetadata } from './otmadness-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness76SeasonalServerKeywordPage />;
}
