import Tibia71PvpeDiscordKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeDiscordKeywordPage />;
}
