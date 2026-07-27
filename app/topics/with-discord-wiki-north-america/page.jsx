import WithDiscordWikiNorthAmericaKeywordPage, { generateMetadata } from './with-discord-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiNorthAmericaKeywordPage />;
}
