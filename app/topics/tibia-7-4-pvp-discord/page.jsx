import Tibia74PvpDiscordKeywordPage, { generateMetadata } from './tibia-7-4-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpDiscordKeywordPage />;
}
