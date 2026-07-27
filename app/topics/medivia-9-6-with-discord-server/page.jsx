import Medivia96WithDiscordServerKeywordPage, { generateMetadata } from './medivia-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96WithDiscordServerKeywordPage />;
}
