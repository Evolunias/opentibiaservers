import WithDiscordWikiGermanyKeywordPage, { generateMetadata } from './with-discord-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiGermanyKeywordPage />;
}
