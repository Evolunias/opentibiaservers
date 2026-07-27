import Tibia100SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalDiscordKeywordPage />;
}
