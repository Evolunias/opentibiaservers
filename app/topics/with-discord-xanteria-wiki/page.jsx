import WithDiscordXanteriaWikiKeywordPage, { generateMetadata } from './with-discord-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaWikiKeywordPage />;
}
