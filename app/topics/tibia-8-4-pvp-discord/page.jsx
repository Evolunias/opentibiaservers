import Tibia84PvpDiscordKeywordPage, { generateMetadata } from './tibia-8-4-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpDiscordKeywordPage />;
}
