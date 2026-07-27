import Eldera12WithDiscordServerKeywordPage, { generateMetadata } from './eldera-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12WithDiscordServerKeywordPage />;
}
