import Tibia84WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordSeasonKeywordPage />;
}
