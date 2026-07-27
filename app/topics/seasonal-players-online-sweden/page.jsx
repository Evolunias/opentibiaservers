import SeasonalPlayersOnlineSwedenKeywordPage, { generateMetadata } from './seasonal-players-online-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineSwedenKeywordPage />;
}
