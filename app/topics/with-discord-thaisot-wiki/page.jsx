import WithDiscordThaisotWikiKeywordPage, { generateMetadata } from './with-discord-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotWikiKeywordPage />;
}
