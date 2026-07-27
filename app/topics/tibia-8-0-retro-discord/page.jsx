import Tibia80RetroDiscordKeywordPage, { generateMetadata } from './tibia-8-0-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroDiscordKeywordPage />;
}
