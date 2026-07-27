import Tibiame13WithDiscordServerKeywordPage, { generateMetadata } from './tibiame-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13WithDiscordServerKeywordPage />;
}
