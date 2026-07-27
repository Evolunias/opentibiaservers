import Oldera80WithDiscordServerKeywordPage, { generateMetadata } from './oldera-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80WithDiscordServerKeywordPage />;
}
