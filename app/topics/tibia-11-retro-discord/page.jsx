import Tibia11RetroDiscordKeywordPage, { generateMetadata } from './tibia-11-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroDiscordKeywordPage />;
}
