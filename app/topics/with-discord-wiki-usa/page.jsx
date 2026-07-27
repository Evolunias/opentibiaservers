import WithDiscordWikiUsaKeywordPage, { generateMetadata } from './with-discord-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiUsaKeywordPage />;
}
