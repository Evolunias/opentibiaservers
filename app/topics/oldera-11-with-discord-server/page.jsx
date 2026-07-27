import Oldera11WithDiscordServerKeywordPage, { generateMetadata } from './oldera-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11WithDiscordServerKeywordPage />;
}
