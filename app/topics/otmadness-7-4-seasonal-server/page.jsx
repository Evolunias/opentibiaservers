import Otmadness74SeasonalServerKeywordPage, { generateMetadata } from './otmadness-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness74SeasonalServerKeywordPage />;
}
