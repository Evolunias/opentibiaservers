import WithDiscordKasteriaWikiKeywordPage, { generateMetadata } from './with-discord-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaWikiKeywordPage />;
}
