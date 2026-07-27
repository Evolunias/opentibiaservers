import Oldera81WithDiscordServerKeywordPage, { generateMetadata } from './oldera-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera81WithDiscordServerKeywordPage />;
}
