import Medivia13WithDiscordServerKeywordPage, { generateMetadata } from './medivia-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13WithDiscordServerKeywordPage />;
}
