import Shadowcores11WithDiscordServerKeywordPage, { generateMetadata } from './shadowcores-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11WithDiscordServerKeywordPage />;
}
