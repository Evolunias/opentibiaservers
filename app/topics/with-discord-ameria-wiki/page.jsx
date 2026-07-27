import WithDiscordAmeriaWikiKeywordPage, { generateMetadata } from './with-discord-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaWikiKeywordPage />;
}
