import Kasteria13SeasonalServerKeywordPage, { generateMetadata } from './kasteria-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13SeasonalServerKeywordPage />;
}
