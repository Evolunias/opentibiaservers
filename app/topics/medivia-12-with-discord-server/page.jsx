import Medivia12WithDiscordServerKeywordPage, { generateMetadata } from './medivia-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12WithDiscordServerKeywordPage />;
}
