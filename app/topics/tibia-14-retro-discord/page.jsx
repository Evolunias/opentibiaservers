import Tibia14RetroDiscordKeywordPage, { generateMetadata } from './tibia-14-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroDiscordKeywordPage />;
}
