import Tibia71WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-7-1-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithDiscordSeasonKeywordPage />;
}
