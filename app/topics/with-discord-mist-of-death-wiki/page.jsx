import WithDiscordMistOfDeathWikiKeywordPage, { generateMetadata } from './with-discord-mist-of-death-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMistOfDeathWikiKeywordPage />;
}
