import Midhem96WithDiscordServerKeywordPage, { generateMetadata } from './midhem-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96WithDiscordServerKeywordPage />;
}
