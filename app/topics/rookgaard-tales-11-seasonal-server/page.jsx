import RookgaardTales11SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales11SeasonalServerKeywordPage />;
}
