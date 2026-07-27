import Tibia84SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalDiscordKeywordPage />;
}
