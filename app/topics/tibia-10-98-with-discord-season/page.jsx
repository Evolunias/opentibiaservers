import Tibia1098WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-10-98-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithDiscordSeasonKeywordPage />;
}
