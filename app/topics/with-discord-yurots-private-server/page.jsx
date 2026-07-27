import WithDiscordYurotsPrivateServerKeywordPage, { generateMetadata } from './with-discord-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsPrivateServerKeywordPage />;
}
