import Tibia772SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalDiscordKeywordPage />;
}
