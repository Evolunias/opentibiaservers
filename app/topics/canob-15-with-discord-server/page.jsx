import Canob15WithDiscordServerKeywordPage, { generateMetadata } from './canob-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15WithDiscordServerKeywordPage />;
}
