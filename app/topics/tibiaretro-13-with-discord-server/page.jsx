import Tibiaretro13WithDiscordServerKeywordPage, { generateMetadata } from './tibiaretro-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13WithDiscordServerKeywordPage />;
}
