import Tibia13PvpDiscordKeywordPage, { generateMetadata } from './tibia-13-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpDiscordKeywordPage />;
}
