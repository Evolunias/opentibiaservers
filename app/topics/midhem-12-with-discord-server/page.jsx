import Midhem12WithDiscordServerKeywordPage, { generateMetadata } from './midhem-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12WithDiscordServerKeywordPage />;
}
