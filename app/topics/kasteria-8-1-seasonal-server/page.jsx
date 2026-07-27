import Kasteria81SeasonalServerKeywordPage, { generateMetadata } from './kasteria-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria81SeasonalServerKeywordPage />;
}
