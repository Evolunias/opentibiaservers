import Oldera12WithDiscordServerKeywordPage, { generateMetadata } from './oldera-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12WithDiscordServerKeywordPage />;
}
