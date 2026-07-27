import Cyntara13WithDiscordServerKeywordPage, { generateMetadata } from './cyntara-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13WithDiscordServerKeywordPage />;
}
