import Oldera14WithDiscordServerKeywordPage, { generateMetadata } from './oldera-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14WithDiscordServerKeywordPage />;
}
