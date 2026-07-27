import Tibia100NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpDiscordKeywordPage />;
}
