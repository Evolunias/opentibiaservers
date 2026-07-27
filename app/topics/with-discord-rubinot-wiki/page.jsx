import WithDiscordRubinotWikiKeywordPage, { generateMetadata } from './with-discord-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotWikiKeywordPage />;
}
