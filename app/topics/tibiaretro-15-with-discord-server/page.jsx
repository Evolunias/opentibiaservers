import Tibiaretro15WithDiscordServerKeywordPage, { generateMetadata } from './tibiaretro-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15WithDiscordServerKeywordPage />;
}
