import Otmadness86SeasonalServerKeywordPage, { generateMetadata } from './otmadness-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness86SeasonalServerKeywordPage />;
}
