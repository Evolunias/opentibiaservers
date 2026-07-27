import Tibia76NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpDiscordKeywordPage />;
}
