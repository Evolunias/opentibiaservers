import Tibia80NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpDiscordKeywordPage />;
}
