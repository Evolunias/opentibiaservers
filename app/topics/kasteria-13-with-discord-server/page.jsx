import Kasteria13WithDiscordServerKeywordPage, { generateMetadata } from './kasteria-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13WithDiscordServerKeywordPage />;
}
