import Tibiame12WithDiscordServerKeywordPage, { generateMetadata } from './tibiame-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12WithDiscordServerKeywordPage />;
}
