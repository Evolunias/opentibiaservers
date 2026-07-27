import Tibia96SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalDiscordKeywordPage />;
}
