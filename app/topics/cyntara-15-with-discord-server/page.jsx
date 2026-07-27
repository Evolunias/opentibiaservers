import Cyntara15WithDiscordServerKeywordPage, { generateMetadata } from './cyntara-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15WithDiscordServerKeywordPage />;
}
