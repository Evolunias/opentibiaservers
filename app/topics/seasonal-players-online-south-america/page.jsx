import SeasonalPlayersOnlineSouthAmericaKeywordPage, { generateMetadata } from './seasonal-players-online-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineSouthAmericaKeywordPage />;
}
