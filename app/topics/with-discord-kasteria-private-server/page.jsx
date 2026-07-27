import WithDiscordKasteriaPrivateServerKeywordPage, { generateMetadata } from './with-discord-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaPrivateServerKeywordPage />;
}
