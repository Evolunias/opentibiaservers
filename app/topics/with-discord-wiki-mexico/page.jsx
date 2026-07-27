import WithDiscordWikiMexicoKeywordPage, { generateMetadata } from './with-discord-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiMexicoKeywordPage />;
}
