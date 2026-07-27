import WithDiscordMediviaWikiKeywordPage, { generateMetadata } from './with-discord-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaWikiKeywordPage />;
}
