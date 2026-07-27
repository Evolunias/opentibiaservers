import Eldera14WithDiscordServerKeywordPage, { generateMetadata } from './eldera-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14WithDiscordServerKeywordPage />;
}
