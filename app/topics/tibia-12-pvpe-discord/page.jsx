import Tibia12PvpeDiscordKeywordPage, { generateMetadata } from './tibia-12-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeDiscordKeywordPage />;
}
