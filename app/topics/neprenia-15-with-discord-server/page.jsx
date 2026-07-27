import Neprenia15WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15WithDiscordServerKeywordPage />;
}
