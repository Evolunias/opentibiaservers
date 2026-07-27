import WithDiscordWikiSwedenKeywordPage, { generateMetadata } from './with-discord-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiSwedenKeywordPage />;
}
