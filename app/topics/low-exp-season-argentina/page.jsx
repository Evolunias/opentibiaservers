import LowExpSeasonArgentinaKeywordPage, { generateMetadata } from './low-exp-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonArgentinaKeywordPage />;
}
