import Tibia15WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-15-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordSeasonKeywordPage />;
}
