import WithDiscordAlasteraWikiKeywordPage, { generateMetadata } from './with-discord-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraWikiKeywordPage />;
}
