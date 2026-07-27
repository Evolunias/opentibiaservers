import Tibia71PvpDiscordKeywordPage, { generateMetadata } from './tibia-7-1-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpDiscordKeywordPage />;
}
