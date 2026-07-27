import Tibia14PvpDiscordKeywordPage, { generateMetadata } from './tibia-14-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpDiscordKeywordPage />;
}
