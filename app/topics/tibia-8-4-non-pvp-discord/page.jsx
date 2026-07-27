import Tibia84NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpDiscordKeywordPage />;
}
