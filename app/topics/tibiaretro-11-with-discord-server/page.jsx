import Tibiaretro11WithDiscordServerKeywordPage, { generateMetadata } from './tibiaretro-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11WithDiscordServerKeywordPage />;
}
