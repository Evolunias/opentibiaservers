import Eldera13WithDiscordServerKeywordPage, { generateMetadata } from './eldera-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13WithDiscordServerKeywordPage />;
}
