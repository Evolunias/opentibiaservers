import Tibia15PvpeDiscordKeywordPage, { generateMetadata } from './tibia-15-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeDiscordKeywordPage />;
}
