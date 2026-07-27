import Tibiaretro71WithDiscordServerKeywordPage, { generateMetadata } from './tibiaretro-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro71WithDiscordServerKeywordPage />;
}
