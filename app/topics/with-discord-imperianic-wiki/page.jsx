import WithDiscordImperianicWikiKeywordPage, { generateMetadata } from './with-discord-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicWikiKeywordPage />;
}
