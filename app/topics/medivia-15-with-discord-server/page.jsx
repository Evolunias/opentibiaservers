import Medivia15WithDiscordServerKeywordPage, { generateMetadata } from './medivia-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15WithDiscordServerKeywordPage />;
}
