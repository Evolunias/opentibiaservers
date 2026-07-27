import Tibia76SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalDiscordKeywordPage />;
}
