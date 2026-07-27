import Midhem81WithDiscordServerKeywordPage, { generateMetadata } from './midhem-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81WithDiscordServerKeywordPage />;
}
