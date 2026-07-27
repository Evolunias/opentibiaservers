import WithDiscordServerListMexicoKeywordPage, { generateMetadata } from './with-discord-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListMexicoKeywordPage />;
}
