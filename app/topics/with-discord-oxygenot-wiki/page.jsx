import WithDiscordOxygenotWikiKeywordPage, { generateMetadata } from './with-discord-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOxygenotWikiKeywordPage />;
}
