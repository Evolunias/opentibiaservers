import WithDiscordTibiameWikiKeywordPage, { generateMetadata } from './with-discord-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameWikiKeywordPage />;
}
