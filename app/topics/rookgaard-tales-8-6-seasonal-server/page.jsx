import RookgaardTales86SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales86SeasonalServerKeywordPage />;
}
