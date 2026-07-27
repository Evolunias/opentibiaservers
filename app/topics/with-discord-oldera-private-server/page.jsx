import WithDiscordOlderaPrivateServerKeywordPage, { generateMetadata } from './with-discord-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaPrivateServerKeywordPage />;
}
