import WithDiscordThorniaWikiKeywordPage, { generateMetadata } from './with-discord-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaWikiKeywordPage />;
}
