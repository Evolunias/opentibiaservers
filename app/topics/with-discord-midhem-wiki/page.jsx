import WithDiscordMidhemWikiKeywordPage, { generateMetadata } from './with-discord-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemWikiKeywordPage />;
}
