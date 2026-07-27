import WithDiscordRangerSArcaniWikiKeywordPage, { generateMetadata } from './with-discord-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRangerSArcaniWikiKeywordPage />;
}
