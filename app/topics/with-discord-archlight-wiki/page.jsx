import WithDiscordArchlightWikiKeywordPage, { generateMetadata } from './with-discord-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightWikiKeywordPage />;
}
