import Oldera86WithDiscordServerKeywordPage, { generateMetadata } from './oldera-8-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86WithDiscordServerKeywordPage />;
}
