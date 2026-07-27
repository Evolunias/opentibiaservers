import Tibia772WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-7-72-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithDiscordSeasonKeywordPage />;
}
