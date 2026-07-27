import Miracle13WithDiscordServerKeywordPage, { generateMetadata } from './miracle-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13WithDiscordServerKeywordPage />;
}
