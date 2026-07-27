import WithDiscordWikiCanadaKeywordPage, { generateMetadata } from './with-discord-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiCanadaKeywordPage />;
}
