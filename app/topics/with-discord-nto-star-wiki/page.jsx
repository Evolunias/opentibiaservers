import WithDiscordNtoStarWikiKeywordPage, { generateMetadata } from './with-discord-nto-star-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarWikiKeywordPage />;
}
