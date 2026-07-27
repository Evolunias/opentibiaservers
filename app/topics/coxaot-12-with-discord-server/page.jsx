import Coxaot12WithDiscordServerKeywordPage, { generateMetadata } from './coxaot-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12WithDiscordServerKeywordPage />;
}
