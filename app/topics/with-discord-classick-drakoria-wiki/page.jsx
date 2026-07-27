import WithDiscordClassickDrakoriaWikiKeywordPage, { generateMetadata } from './with-discord-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassickDrakoriaWikiKeywordPage />;
}
