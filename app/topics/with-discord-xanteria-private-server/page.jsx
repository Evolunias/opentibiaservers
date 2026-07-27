import WithDiscordXanteriaPrivateServerKeywordPage, { generateMetadata } from './with-discord-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaPrivateServerKeywordPage />;
}
