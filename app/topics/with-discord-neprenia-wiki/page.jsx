import WithDiscordNepreniaWikiKeywordPage, { generateMetadata } from './with-discord-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaWikiKeywordPage />;
}
