import WithDiscordAureraGlobalWikiKeywordPage, { generateMetadata } from './with-discord-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalWikiKeywordPage />;
}
