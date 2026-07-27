import WithDiscordTibiameClientKeywordPage, { generateMetadata } from './with-discord-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameClientKeywordPage />;
}
