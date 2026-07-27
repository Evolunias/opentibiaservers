import Classicus11WithDiscordServerKeywordPage, { generateMetadata } from './classicus-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11WithDiscordServerKeywordPage />;
}
