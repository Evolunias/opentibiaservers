import Midhem80WithDiscordServerKeywordPage, { generateMetadata } from './midhem-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80WithDiscordServerKeywordPage />;
}
