import Otmadness71SeasonalServerKeywordPage, { generateMetadata } from './otmadness-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness71SeasonalServerKeywordPage />;
}
