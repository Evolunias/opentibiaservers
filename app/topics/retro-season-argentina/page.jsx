import RetroSeasonArgentinaKeywordPage, { generateMetadata } from './retro-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonArgentinaKeywordPage />;
}
