import Tibiascape15WithDiscordServerKeywordPage, { generateMetadata } from './tibiascape-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15WithDiscordServerKeywordPage />;
}
