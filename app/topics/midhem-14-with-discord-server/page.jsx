import Midhem14WithDiscordServerKeywordPage, { generateMetadata } from './midhem-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14WithDiscordServerKeywordPage />;
}
