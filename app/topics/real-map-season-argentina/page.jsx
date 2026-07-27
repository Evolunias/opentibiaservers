import RealMapSeasonArgentinaKeywordPage, { generateMetadata } from './real-map-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonArgentinaKeywordPage />;
}
