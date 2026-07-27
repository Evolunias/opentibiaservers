import Tibijka15WithDiscordServerKeywordPage, { generateMetadata } from './tibijka-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15WithDiscordServerKeywordPage />;
}
