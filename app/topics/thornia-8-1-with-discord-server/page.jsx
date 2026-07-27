import Thornia81WithDiscordServerKeywordPage, { generateMetadata } from './thornia-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81WithDiscordServerKeywordPage />;
}
