import WithDiscordTibiameDiscordKeywordPage, { generateMetadata } from './with-discord-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameDiscordKeywordPage />;
}
