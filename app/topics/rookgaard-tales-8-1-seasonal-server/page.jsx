import RookgaardTales81SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales81SeasonalServerKeywordPage />;
}
