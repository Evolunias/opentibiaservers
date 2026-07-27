import Tibia15SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-15-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalDiscordKeywordPage />;
}
