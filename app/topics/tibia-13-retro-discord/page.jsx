import Tibia13RetroDiscordKeywordPage, { generateMetadata } from './tibia-13-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroDiscordKeywordPage />;
}
