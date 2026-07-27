import WithDiscordNostaltherWikiKeywordPage, { generateMetadata } from './with-discord-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherWikiKeywordPage />;
}
