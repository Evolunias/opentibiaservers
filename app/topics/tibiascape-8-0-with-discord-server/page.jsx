import Tibiascape80WithDiscordServerKeywordPage, { generateMetadata } from './tibiascape-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80WithDiscordServerKeywordPage />;
}
