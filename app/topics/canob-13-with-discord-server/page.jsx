import Canob13WithDiscordServerKeywordPage, { generateMetadata } from './canob-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13WithDiscordServerKeywordPage />;
}
