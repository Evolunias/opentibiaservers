import Tibijka12WithDiscordServerKeywordPage, { generateMetadata } from './tibijka-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12WithDiscordServerKeywordPage />;
}
