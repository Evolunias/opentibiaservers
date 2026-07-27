import WithDiscordDuraOnlineWikiKeywordPage, { generateMetadata } from './with-discord-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineWikiKeywordPage />;
}
