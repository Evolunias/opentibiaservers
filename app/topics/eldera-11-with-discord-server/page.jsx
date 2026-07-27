import Eldera11WithDiscordServerKeywordPage, { generateMetadata } from './eldera-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11WithDiscordServerKeywordPage />;
}
