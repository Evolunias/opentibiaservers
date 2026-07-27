import Tibia15PvpDiscordKeywordPage, { generateMetadata } from './tibia-15-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpDiscordKeywordPage />;
}
