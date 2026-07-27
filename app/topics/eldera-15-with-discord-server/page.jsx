import Eldera15WithDiscordServerKeywordPage, { generateMetadata } from './eldera-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15WithDiscordServerKeywordPage />;
}
