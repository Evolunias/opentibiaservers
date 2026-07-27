import Tibia86SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalDiscordKeywordPage />;
}
