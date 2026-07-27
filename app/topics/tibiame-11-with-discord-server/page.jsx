import Tibiame11WithDiscordServerKeywordPage, { generateMetadata } from './tibiame-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11WithDiscordServerKeywordPage />;
}
