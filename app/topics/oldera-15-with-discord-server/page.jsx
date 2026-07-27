import Oldera15WithDiscordServerKeywordPage, { generateMetadata } from './oldera-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15WithDiscordServerKeywordPage />;
}
