import WithDiscordTibiaretroPrivateServerKeywordPage, { generateMetadata } from './with-discord-tibiaretro-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroPrivateServerKeywordPage />;
}
