import Tibia81NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpDiscordKeywordPage />;
}
