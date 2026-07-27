import Thornia96WithDiscordServerKeywordPage, { generateMetadata } from './thornia-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96WithDiscordServerKeywordPage />;
}
