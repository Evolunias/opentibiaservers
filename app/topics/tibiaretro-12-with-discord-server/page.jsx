import Tibiaretro12WithDiscordServerKeywordPage, { generateMetadata } from './tibiaretro-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12WithDiscordServerKeywordPage />;
}
