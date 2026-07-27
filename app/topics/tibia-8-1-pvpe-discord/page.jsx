import Tibia81PvpeDiscordKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeDiscordKeywordPage />;
}
