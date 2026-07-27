import Tibia11PvpDiscordKeywordPage, { generateMetadata } from './tibia-11-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpDiscordKeywordPage />;
}
