import WithDiscordTibiaraWikiKeywordPage, { generateMetadata } from './with-discord-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraWikiKeywordPage />;
}
