import Medivia11WithDiscordServerKeywordPage, { generateMetadata } from './medivia-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11WithDiscordServerKeywordPage />;
}
