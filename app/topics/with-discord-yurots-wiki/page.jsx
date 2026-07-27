import WithDiscordYurotsWikiKeywordPage, { generateMetadata } from './with-discord-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsWikiKeywordPage />;
}
