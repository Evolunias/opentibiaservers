import Tibia76WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordSeasonKeywordPage />;
}
