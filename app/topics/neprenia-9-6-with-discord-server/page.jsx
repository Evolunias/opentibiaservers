import Neprenia96WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96WithDiscordServerKeywordPage />;
}
