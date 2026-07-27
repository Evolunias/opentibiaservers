import Otmadness100SeasonalServerKeywordPage, { generateMetadata } from './otmadness-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness100SeasonalServerKeywordPage />;
}
