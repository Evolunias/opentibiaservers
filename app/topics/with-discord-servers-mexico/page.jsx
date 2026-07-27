import WithDiscordServersMexicoKeywordPage, { generateMetadata } from './with-discord-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServersMexicoKeywordPage />;
}
