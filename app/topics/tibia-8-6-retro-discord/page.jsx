import Tibia86RetroDiscordKeywordPage, { generateMetadata } from './tibia-8-6-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroDiscordKeywordPage />;
}
