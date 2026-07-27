import Midhem13WithDiscordServerKeywordPage, { generateMetadata } from './midhem-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13WithDiscordServerKeywordPage />;
}
