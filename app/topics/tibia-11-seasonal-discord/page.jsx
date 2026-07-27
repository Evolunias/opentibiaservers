import Tibia11SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-11-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalDiscordKeywordPage />;
}
