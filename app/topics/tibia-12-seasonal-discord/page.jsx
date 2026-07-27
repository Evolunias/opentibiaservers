import Tibia12SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-12-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalDiscordKeywordPage />;
}
