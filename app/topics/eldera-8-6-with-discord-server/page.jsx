import Eldera86WithDiscordServerKeywordPage, { generateMetadata } from './eldera-8-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera86WithDiscordServerKeywordPage />;
}
