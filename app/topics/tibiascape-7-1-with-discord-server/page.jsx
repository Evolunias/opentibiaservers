import Tibiascape71WithDiscordServerKeywordPage, { generateMetadata } from './tibiascape-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71WithDiscordServerKeywordPage />;
}
