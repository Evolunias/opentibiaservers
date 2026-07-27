import RookgaardTales84SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales84SeasonalServerKeywordPage />;
}
