import Tibia15RetroDiscordKeywordPage, { generateMetadata } from './tibia-15-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroDiscordKeywordPage />;
}
