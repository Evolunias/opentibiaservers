import Tibia11NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-11-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpDiscordKeywordPage />;
}
