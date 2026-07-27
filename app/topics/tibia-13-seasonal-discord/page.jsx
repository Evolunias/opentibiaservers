import Tibia13SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-13-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalDiscordKeywordPage />;
}
