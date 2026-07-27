import Tibia80PvpeDiscordKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeDiscordKeywordPage />;
}
