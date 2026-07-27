import Neprenia71WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia71WithDiscordServerKeywordPage />;
}
