import Medivia14WithDiscordServerKeywordPage, { generateMetadata } from './medivia-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14WithDiscordServerKeywordPage />;
}
