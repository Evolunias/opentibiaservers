import Classicus100WithDiscordServerKeywordPage, { generateMetadata } from './classicus-10-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100WithDiscordServerKeywordPage />;
}
