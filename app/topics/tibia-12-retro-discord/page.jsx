import Tibia12RetroDiscordKeywordPage, { generateMetadata } from './tibia-12-retro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroDiscordKeywordPage />;
}
