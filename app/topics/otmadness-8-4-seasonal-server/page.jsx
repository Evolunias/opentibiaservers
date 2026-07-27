import Otmadness84SeasonalServerKeywordPage, { generateMetadata } from './otmadness-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness84SeasonalServerKeywordPage />;
}
