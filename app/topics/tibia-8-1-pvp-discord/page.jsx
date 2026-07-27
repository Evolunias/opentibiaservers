import Tibia81PvpDiscordKeywordPage, { generateMetadata } from './tibia-8-1-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpDiscordKeywordPage />;
}
