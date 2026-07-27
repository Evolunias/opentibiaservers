import Medivia81WithDiscordServerKeywordPage, { generateMetadata } from './medivia-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia81WithDiscordServerKeywordPage />;
}
