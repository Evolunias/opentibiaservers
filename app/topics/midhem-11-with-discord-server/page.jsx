import Midhem11WithDiscordServerKeywordPage, { generateMetadata } from './midhem-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11WithDiscordServerKeywordPage />;
}
