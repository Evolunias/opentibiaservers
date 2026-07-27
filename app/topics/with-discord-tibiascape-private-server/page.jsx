import WithDiscordTibiascapePrivateServerKeywordPage, { generateMetadata } from './with-discord-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapePrivateServerKeywordPage />;
}
