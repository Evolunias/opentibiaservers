import Thornia15WithDiscordServerKeywordPage, { generateMetadata } from './thornia-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15WithDiscordServerKeywordPage />;
}
