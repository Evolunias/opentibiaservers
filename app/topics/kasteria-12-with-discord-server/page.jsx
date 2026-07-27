import Kasteria12WithDiscordServerKeywordPage, { generateMetadata } from './kasteria-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12WithDiscordServerKeywordPage />;
}
