import WithDiscordEternalOdysseyWikiKeywordPage, { generateMetadata } from './with-discord-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEternalOdysseyWikiKeywordPage />;
}
