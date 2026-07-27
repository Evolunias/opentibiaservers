import Classicus12WithDiscordServerKeywordPage, { generateMetadata } from './classicus-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12WithDiscordServerKeywordPage />;
}
