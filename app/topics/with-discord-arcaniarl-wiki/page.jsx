import WithDiscordArcaniarlWikiKeywordPage, { generateMetadata } from './with-discord-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlWikiKeywordPage />;
}
