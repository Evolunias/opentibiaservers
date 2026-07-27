import WithDiscordRubinotPrivateServerKeywordPage, { generateMetadata } from './with-discord-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotPrivateServerKeywordPage />;
}
