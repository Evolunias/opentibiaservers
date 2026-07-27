import Kasteria76SeasonalServerKeywordPage, { generateMetadata } from './kasteria-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria76SeasonalServerKeywordPage />;
}
