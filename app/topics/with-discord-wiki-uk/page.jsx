import WithDiscordWikiUkKeywordPage, { generateMetadata } from './with-discord-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiUkKeywordPage />;
}
