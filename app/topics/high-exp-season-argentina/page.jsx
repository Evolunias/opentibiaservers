import HighExpSeasonArgentinaKeywordPage, { generateMetadata } from './high-exp-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonArgentinaKeywordPage />;
}
