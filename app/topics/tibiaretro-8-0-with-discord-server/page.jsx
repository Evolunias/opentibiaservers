import Tibiaretro80WithDiscordServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80WithDiscordServerKeywordPage />;
}
