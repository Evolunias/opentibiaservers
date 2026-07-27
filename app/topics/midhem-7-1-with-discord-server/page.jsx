import Midhem71WithDiscordServerKeywordPage, { generateMetadata } from './midhem-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71WithDiscordServerKeywordPage />;
}
