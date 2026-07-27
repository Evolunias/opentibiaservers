import Tibia76PvpDiscordKeywordPage, { generateMetadata } from './tibia-7-6-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpDiscordKeywordPage />;
}
