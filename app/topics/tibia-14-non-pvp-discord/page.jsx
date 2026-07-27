import Tibia14NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-14-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpDiscordKeywordPage />;
}
