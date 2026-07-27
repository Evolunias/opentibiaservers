import Tibiaretro86WithDiscordServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86WithDiscordServerKeywordPage />;
}
