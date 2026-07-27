import WithDiscordEvoleraWikiKeywordPage, { generateMetadata } from './with-discord-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraWikiKeywordPage />;
}
