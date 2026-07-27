import Shadowcores12WithDiscordServerKeywordPage, { generateMetadata } from './shadowcores-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12WithDiscordServerKeywordPage />;
}
