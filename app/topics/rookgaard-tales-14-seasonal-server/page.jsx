import RookgaardTales14SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales14SeasonalServerKeywordPage />;
}
