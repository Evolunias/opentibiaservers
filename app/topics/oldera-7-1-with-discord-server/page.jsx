import Oldera71WithDiscordServerKeywordPage, { generateMetadata } from './oldera-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera71WithDiscordServerKeywordPage />;
}
