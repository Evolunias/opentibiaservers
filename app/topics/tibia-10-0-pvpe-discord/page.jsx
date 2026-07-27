import Tibia100PvpeDiscordKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeDiscordKeywordPage />;
}
