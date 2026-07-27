import Tibia74NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpDiscordKeywordPage />;
}
