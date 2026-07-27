import FreshStartSeasonArgentinaKeywordPage, { generateMetadata } from './fresh-start-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonArgentinaKeywordPage />;
}
