import Kasteria11WithDiscordServerKeywordPage, { generateMetadata } from './kasteria-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11WithDiscordServerKeywordPage />;
}
