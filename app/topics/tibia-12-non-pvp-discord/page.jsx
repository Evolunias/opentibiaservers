import Tibia12NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-12-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpDiscordKeywordPage />;
}
