import Cyntara12WithDiscordServerKeywordPage, { generateMetadata } from './cyntara-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12WithDiscordServerKeywordPage />;
}
