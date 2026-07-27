import Classicus81WithDiscordServerKeywordPage, { generateMetadata } from './classicus-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81WithDiscordServerKeywordPage />;
}
