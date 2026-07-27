import WithDiscordOriginaltibiaWikiKeywordPage, { generateMetadata } from './with-discord-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOriginaltibiaWikiKeywordPage />;
}
