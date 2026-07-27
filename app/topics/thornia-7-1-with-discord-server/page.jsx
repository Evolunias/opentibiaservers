import Thornia71WithDiscordServerKeywordPage, { generateMetadata } from './thornia-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71WithDiscordServerKeywordPage />;
}
