import WithDiscordBlazeraWikiKeywordPage, { generateMetadata } from './with-discord-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraWikiKeywordPage />;
}
