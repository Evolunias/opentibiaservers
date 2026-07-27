import Thornia14WithDiscordServerKeywordPage, { generateMetadata } from './thornia-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14WithDiscordServerKeywordPage />;
}
