import Tibia13PvpeDiscordKeywordPage, { generateMetadata } from './tibia-13-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeDiscordKeywordPage />;
}
