import WithDiscordTibiameKeywordPage, { generateMetadata } from './with-discord-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameKeywordPage />;
}
