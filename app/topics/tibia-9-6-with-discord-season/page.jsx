import Tibia96WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-9-6-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithDiscordSeasonKeywordPage />;
}
