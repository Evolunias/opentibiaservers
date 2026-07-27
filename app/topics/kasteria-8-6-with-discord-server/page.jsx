import Kasteria86WithDiscordServerKeywordPage, { generateMetadata } from './kasteria-8-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86WithDiscordServerKeywordPage />;
}
