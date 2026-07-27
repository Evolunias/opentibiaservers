import Oldera96WithDiscordServerKeywordPage, { generateMetadata } from './oldera-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera96WithDiscordServerKeywordPage />;
}
