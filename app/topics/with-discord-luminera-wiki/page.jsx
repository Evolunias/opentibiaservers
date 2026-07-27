import WithDiscordLumineraWikiKeywordPage, { generateMetadata } from './with-discord-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraWikiKeywordPage />;
}
