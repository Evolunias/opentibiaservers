import PvpeSeasonArgentinaKeywordPage, { generateMetadata } from './pvpe-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSeasonArgentinaKeywordPage />;
}
