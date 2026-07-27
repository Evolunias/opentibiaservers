import Neprenia14WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14WithDiscordServerKeywordPage />;
}
