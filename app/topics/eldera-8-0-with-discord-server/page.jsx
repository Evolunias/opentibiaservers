import Eldera80WithDiscordServerKeywordPage, { generateMetadata } from './eldera-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80WithDiscordServerKeywordPage />;
}
