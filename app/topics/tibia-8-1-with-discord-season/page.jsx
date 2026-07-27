import Tibia81WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordSeasonKeywordPage />;
}
