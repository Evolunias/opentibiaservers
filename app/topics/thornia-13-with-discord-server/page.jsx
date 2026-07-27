import Thornia13WithDiscordServerKeywordPage, { generateMetadata } from './thornia-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13WithDiscordServerKeywordPage />;
}
