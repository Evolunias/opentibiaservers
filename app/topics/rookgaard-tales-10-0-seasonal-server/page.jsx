import RookgaardTales100SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales100SeasonalServerKeywordPage />;
}
