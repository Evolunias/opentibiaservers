import RookgaardTales96SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales96SeasonalServerKeywordPage />;
}
