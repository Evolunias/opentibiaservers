import Tibia100PvpDiscordKeywordPage, { generateMetadata } from './tibia-10-0-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpDiscordKeywordPage />;
}
