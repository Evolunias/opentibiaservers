import EvoSeasonArgentinaKeywordPage, { generateMetadata } from './evo-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonArgentinaKeywordPage />;
}
