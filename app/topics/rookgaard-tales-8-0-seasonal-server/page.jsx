import RookgaardTales80SeasonalServerKeywordPage, { generateMetadata } from './rookgaard-tales-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales80SeasonalServerKeywordPage />;
}
