import WithDiscordTibijkaWikiKeywordPage, { generateMetadata } from './with-discord-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaWikiKeywordPage />;
}
