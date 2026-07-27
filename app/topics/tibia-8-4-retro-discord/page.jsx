import Tibia84RetroDiscordKeywordPage, { generateMetadata } from './tibia-8-4-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroDiscordKeywordPage />;
}
