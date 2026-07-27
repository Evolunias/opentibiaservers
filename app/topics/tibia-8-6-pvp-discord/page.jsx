import Tibia86PvpDiscordKeywordPage, { generateMetadata } from './tibia-8-6-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpDiscordKeywordPage />;
}
