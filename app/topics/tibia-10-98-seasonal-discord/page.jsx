import Tibia1098SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalDiscordKeywordPage />;
}
