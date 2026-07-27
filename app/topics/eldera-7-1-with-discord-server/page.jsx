import Eldera71WithDiscordServerKeywordPage, { generateMetadata } from './eldera-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera71WithDiscordServerKeywordPage />;
}
