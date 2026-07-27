import Neprenia86WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-8-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia86WithDiscordServerKeywordPage />;
}
