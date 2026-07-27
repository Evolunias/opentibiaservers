import CustomMapSeasonArgentinaKeywordPage, { generateMetadata } from './custom-map-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonArgentinaKeywordPage />;
}
