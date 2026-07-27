import WithDiscordTibiameLoginKeywordPage, { generateMetadata } from './with-discord-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameLoginKeywordPage />;
}
