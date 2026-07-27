import Otmadness11SeasonalServerKeywordPage, { generateMetadata } from './otmadness-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness11SeasonalServerKeywordPage />;
}
