import Eldera96WithDiscordServerKeywordPage, { generateMetadata } from './eldera-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96WithDiscordServerKeywordPage />;
}
