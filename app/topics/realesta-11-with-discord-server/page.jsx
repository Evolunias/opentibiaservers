import Realesta11WithDiscordServerKeywordPage, { generateMetadata } from './realesta-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11WithDiscordServerKeywordPage />;
}
