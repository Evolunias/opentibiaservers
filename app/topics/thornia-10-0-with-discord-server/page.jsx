import Thornia100WithDiscordServerKeywordPage, { generateMetadata } from './thornia-10-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100WithDiscordServerKeywordPage />;
}
