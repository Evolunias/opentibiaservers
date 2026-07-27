import Tibia96NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpDiscordKeywordPage />;
}
