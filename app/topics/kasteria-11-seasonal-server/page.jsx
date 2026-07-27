import Kasteria11SeasonalServerKeywordPage, { generateMetadata } from './kasteria-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11SeasonalServerKeywordPage />;
}
