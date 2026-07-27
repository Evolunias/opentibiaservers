import Tibijka13WithDiscordServerKeywordPage, { generateMetadata } from './tibijka-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13WithDiscordServerKeywordPage />;
}
