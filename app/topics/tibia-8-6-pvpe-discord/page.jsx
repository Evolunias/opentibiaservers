import Tibia86PvpeDiscordKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeDiscordKeywordPage />;
}
