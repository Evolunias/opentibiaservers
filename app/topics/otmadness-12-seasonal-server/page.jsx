import Otmadness12SeasonalServerKeywordPage, { generateMetadata } from './otmadness-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12SeasonalServerKeywordPage />;
}
