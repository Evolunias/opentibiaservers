import WithDiscordThorniaPrivateServerKeywordPage, { generateMetadata } from './with-discord-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaPrivateServerKeywordPage />;
}
