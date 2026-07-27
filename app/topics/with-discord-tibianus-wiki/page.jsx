import WithDiscordTibianusWikiKeywordPage, { generateMetadata } from './with-discord-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusWikiKeywordPage />;
}
