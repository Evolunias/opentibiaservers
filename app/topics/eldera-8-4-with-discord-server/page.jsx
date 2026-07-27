import Eldera84WithDiscordServerKeywordPage, { generateMetadata } from './eldera-8-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera84WithDiscordServerKeywordPage />;
}
