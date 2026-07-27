import Otmadness15SeasonalServerKeywordPage, { generateMetadata } from './otmadness-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness15SeasonalServerKeywordPage />;
}
