import Neprenia12WithDiscordServerKeywordPage, { generateMetadata } from './neprenia-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12WithDiscordServerKeywordPage />;
}
