import Tibia96PvpDiscordKeywordPage, { generateMetadata } from './tibia-9-6-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpDiscordKeywordPage />;
}
