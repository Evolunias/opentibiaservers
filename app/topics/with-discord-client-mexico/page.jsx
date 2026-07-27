import WithDiscordClientMexicoKeywordPage, { generateMetadata } from './with-discord-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClientMexicoKeywordPage />;
}
