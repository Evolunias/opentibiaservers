import WithDiscordWikiEuropeKeywordPage, { generateMetadata } from './with-discord-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiEuropeKeywordPage />;
}
