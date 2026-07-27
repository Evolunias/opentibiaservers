import WithDiscordDemolidoresWikiKeywordPage, { generateMetadata } from './with-discord-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDemolidoresWikiKeywordPage />;
}
