import WithDiscordCanobWikiKeywordPage, { generateMetadata } from './with-discord-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobWikiKeywordPage />;
}
