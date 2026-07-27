import Oldera76WithDiscordServerKeywordPage, { generateMetadata } from './oldera-7-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera76WithDiscordServerKeywordPage />;
}
