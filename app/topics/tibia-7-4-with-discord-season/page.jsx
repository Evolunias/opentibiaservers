import Tibia74WithDiscordSeasonKeywordPage, { generateMetadata } from './tibia-7-4-with-discord-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithDiscordSeasonKeywordPage />;
}
