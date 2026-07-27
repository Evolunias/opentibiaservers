import WithDiscordNilotWikiKeywordPage, { generateMetadata } from './with-discord-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotWikiKeywordPage />;
}
