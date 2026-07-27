import Midhem74WithDiscordServerKeywordPage, { generateMetadata } from './midhem-7-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem74WithDiscordServerKeywordPage />;
}
