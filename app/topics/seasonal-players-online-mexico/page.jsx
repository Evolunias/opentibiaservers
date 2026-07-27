import SeasonalPlayersOnlineMexicoKeywordPage, { generateMetadata } from './seasonal-players-online-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineMexicoKeywordPage />;
}
