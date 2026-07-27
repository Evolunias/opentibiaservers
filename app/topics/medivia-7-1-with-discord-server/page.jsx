import Medivia71WithDiscordServerKeywordPage, { generateMetadata } from './medivia-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia71WithDiscordServerKeywordPage />;
}
