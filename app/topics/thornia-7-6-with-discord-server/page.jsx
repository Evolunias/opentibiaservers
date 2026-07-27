import Thornia76WithDiscordServerKeywordPage, { generateMetadata } from './thornia-7-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia76WithDiscordServerKeywordPage />;
}
