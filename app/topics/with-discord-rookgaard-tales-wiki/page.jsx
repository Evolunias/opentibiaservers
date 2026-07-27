import WithDiscordRookgaardTalesWikiKeywordPage, { generateMetadata } from './with-discord-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRookgaardTalesWikiKeywordPage />;
}
