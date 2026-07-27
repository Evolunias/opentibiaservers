import WithDiscordWikiPolandKeywordPage, { generateMetadata } from './with-discord-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiPolandKeywordPage />;
}
