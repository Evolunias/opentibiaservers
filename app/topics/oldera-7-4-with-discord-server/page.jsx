import Oldera74WithDiscordServerKeywordPage, { generateMetadata } from './oldera-7-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera74WithDiscordServerKeywordPage />;
}
