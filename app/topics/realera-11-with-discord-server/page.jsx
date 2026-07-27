import Realera11WithDiscordServerKeywordPage, { generateMetadata } from './realera-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11WithDiscordServerKeywordPage />;
}
