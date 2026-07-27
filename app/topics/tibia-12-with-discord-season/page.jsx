import Tibia12WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-12-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordSeasonKeywordPage />;
}
