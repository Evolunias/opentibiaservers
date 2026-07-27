import Tibia14PvpeDiscordKeywordPage, { generateMetadata } from './tibia-14-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeDiscordKeywordPage />;
}
