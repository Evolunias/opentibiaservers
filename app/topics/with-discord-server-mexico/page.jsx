import WithDiscordServerMexicoKeywordPage, { generateMetadata } from './with-discord-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerMexicoKeywordPage />;
}
