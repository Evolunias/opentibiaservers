import Tibiame15WithDiscordServerKeywordPage, { generateMetadata } from './tibiame-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15WithDiscordServerKeywordPage />;
}
