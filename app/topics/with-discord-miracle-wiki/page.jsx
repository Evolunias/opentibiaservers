import WithDiscordMiracleWikiKeywordPage, { generateMetadata } from './with-discord-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleWikiKeywordPage />;
}
