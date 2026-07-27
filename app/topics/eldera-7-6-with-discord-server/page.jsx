import Eldera76WithDiscordServerKeywordPage, { generateMetadata } from './eldera-7-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera76WithDiscordServerKeywordPage />;
}
