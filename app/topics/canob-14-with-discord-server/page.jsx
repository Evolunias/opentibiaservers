import Canob14WithDiscordServerKeywordPage, { generateMetadata } from './canob-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14WithDiscordServerKeywordPage />;
}
