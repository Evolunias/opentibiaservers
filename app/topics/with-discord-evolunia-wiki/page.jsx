import WithDiscordEvoluniaWikiKeywordPage, { generateMetadata } from './with-discord-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaWikiKeywordPage />;
}
