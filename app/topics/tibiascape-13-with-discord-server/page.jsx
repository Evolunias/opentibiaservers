import Tibiascape13WithDiscordServerKeywordPage, { generateMetadata } from './tibiascape-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13WithDiscordServerKeywordPage />;
}
