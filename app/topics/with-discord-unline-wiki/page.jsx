import WithDiscordUnlineWikiKeywordPage, { generateMetadata } from './with-discord-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineWikiKeywordPage />;
}
