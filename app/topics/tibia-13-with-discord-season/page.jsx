import Tibia13WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-13-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordSeasonKeywordPage />;
}
