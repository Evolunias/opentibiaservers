import Classicus74WithDiscordServerKeywordPage, { generateMetadata } from './classicus-7-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74WithDiscordServerKeywordPage />;
}
