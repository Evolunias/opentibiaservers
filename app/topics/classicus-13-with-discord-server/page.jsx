import Classicus13WithDiscordServerKeywordPage, { generateMetadata } from './classicus-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13WithDiscordServerKeywordPage />;
}
