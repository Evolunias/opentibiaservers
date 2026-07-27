import WithDiscordRealestaPrivateServerKeywordPage, { generateMetadata } from './with-discord-realesta-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaPrivateServerKeywordPage />;
}
