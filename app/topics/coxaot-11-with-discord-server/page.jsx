import Coxaot11WithDiscordServerKeywordPage, { generateMetadata } from './coxaot-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11WithDiscordServerKeywordPage />;
}
