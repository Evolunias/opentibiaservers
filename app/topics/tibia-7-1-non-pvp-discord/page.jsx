import Tibia71NonPvpDiscordKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpDiscordKeywordPage />;
}
