import Neprenia81WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia81WithDiscordServerKeywordPage />;
}
