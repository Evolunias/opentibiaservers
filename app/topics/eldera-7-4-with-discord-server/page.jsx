import Eldera74WithDiscordServerKeywordPage, { generateMetadata } from './eldera-7-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera74WithDiscordServerKeywordPage />;
}
