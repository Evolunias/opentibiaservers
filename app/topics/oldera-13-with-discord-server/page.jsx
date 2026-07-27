import Oldera13WithDiscordServerKeywordPage, { generateMetadata } from './oldera-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13WithDiscordServerKeywordPage />;
}
