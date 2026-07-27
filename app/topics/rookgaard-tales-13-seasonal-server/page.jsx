import RookgaardTales13SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales13SeasonalServerKeywordPage />;
}
