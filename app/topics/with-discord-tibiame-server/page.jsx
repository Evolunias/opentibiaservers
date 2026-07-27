import WithDiscordTibiameServerKeywordPage, { generateMetadata } from './with-discord-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameServerKeywordPage />;
}
