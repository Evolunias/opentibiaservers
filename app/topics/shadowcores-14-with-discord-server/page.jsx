import Shadowcores14WithDiscordServerKeywordPage, { generateMetadata } from './shadowcores-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14WithDiscordServerKeywordPage />;
}
