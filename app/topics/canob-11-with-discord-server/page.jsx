import Canob11WithDiscordServerKeywordPage, { generateMetadata } from './canob-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11WithDiscordServerKeywordPage />;
}
