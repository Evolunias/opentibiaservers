import Tibia14SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-14-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalDiscordKeywordPage />;
}
