import WithDiscordTibiaretroServerKeywordPage, { generateMetadata } from './with-discord-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroServerKeywordPage />;
}
