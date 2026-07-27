import Neprenia13WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13WithDiscordServerKeywordPage />;
}
