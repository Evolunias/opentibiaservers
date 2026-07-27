import WithDiscordWikiLatinAmericaKeywordPage, { generateMetadata } from './with-discord-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiLatinAmericaKeywordPage />;
}
