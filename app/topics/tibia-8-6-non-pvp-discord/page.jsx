import Tibia86NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpDiscordKeywordPage />;
}
