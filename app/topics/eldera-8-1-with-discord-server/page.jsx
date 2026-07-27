import Eldera81WithDiscordServerKeywordPage, { generateMetadata } from './eldera-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera81WithDiscordServerKeywordPage />;
}
