import Otmadness13SeasonalServerKeywordPage, { generateMetadata } from './otmadness-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13SeasonalServerKeywordPage />;
}
