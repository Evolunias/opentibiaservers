import Tibia12PvpDiscordKeywordPage, { generateMetadata } from './tibia-12-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpDiscordKeywordPage />;
}
