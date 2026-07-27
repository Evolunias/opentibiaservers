import Coxaot15WithDiscordServerKeywordPage, { generateMetadata } from './coxaot-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15WithDiscordServerKeywordPage />;
}
