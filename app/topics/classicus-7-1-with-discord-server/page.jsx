import Classicus71WithDiscordServerKeywordPage, { generateMetadata } from './classicus-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71WithDiscordServerKeywordPage />;
}
