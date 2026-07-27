import Tibia13NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-13-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpDiscordKeywordPage />;
}
