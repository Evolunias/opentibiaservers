import WithDiscordTibiamePrivateServerKeywordPage, { generateMetadata } from './with-discord-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiamePrivateServerKeywordPage />;
}
