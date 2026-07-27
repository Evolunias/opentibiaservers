import Classicus80WithDiscordServerKeywordPage, { generateMetadata } from './classicus-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80WithDiscordServerKeywordPage />;
}
