import RookgaardTales12SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales12SeasonalServerKeywordPage />;
}
