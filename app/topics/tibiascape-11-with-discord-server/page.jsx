import Tibiascape11WithDiscordServerKeywordPage, { generateMetadata } from './tibiascape-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11WithDiscordServerKeywordPage />;
}
