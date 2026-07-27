import Oldera84WithDiscordServerKeywordPage, { generateMetadata } from './oldera-8-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera84WithDiscordServerKeywordPage />;
}
