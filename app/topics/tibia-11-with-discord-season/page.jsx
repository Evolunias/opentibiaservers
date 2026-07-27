import Tibia11WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-11-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordSeasonKeywordPage />;
}
