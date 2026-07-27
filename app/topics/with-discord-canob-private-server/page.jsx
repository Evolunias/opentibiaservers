import WithDiscordCanobPrivateServerKeywordPage, { generateMetadata } from './with-discord-canob-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobPrivateServerKeywordPage />;
}
