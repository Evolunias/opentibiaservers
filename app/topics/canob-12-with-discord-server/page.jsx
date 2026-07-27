import Canob12WithDiscordServerKeywordPage, { generateMetadata } from './canob-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12WithDiscordServerKeywordPage />;
}
