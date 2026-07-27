import RookgaardTales15SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales15SeasonalServerKeywordPage />;
}
