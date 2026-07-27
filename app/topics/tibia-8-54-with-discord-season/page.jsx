import Tibia854WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-8-54-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithDiscordSeasonKeywordPage />;
}
