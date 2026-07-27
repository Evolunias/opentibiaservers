import WithDiscordRealestaWikiKeywordPage, { generateMetadata } from './with-discord-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaWikiKeywordPage />;
}
