import Shadowcores13WithDiscordServerKeywordPage, { generateMetadata } from './shadowcores-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13WithDiscordServerKeywordPage />;
}
